package com.blackheronteam.EatTogether.service;

import com.mapbox.api.geocoding.v5.MapboxGeocoding;
import com.mapbox.api.geocoding.v5.models.CarmenFeature;
import com.mapbox.api.geocoding.v5.models.GeocodingResponse;
import com.mapbox.geojson.Point;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import java.io.IOException;
import java.util.List;

@Log4j2
@Service(value = "addressLookupService")
public class AddressLookupService {
    public static final String TOKEN = "pk.eyJ1IjoiZ2FicmllbGFiYXJ0bmlja2EiLCJhIjoiY2puaGhiMjhrMGNzbDNwcjI1ZTUyY2lpOCJ9.9dgyatGtYQ2A59ygu-j3pw";


    public Response<GeocodingResponse> getMap(@RequestParam("query") String query) throws IOException {
        MapboxGeocoding mapboxGeocoding = MapboxGeocoding.builder()
                .accessToken(TOKEN)
                .query(query)
                .build();


        mapboxGeocoding.enqueueCall(new Callback<GeocodingResponse>() {
            @Override
            public void onResponse(Call<GeocodingResponse> call, Response<GeocodingResponse> response) {

                List<CarmenFeature> results = response.body().features();

                if (!results.isEmpty()) {
                    if (results.size() > 1) {
                        log.warn("Found more than 1 address!!! " + results.toString());
                    }

                    Point firstResultPoint = results.get(0).center();
                    log.info("onResponse: " + firstResultPoint.toString());

                } else {
                    log.warn("onResponse: No result found");

                }
            }

            @Override
            public void onFailure(Call<GeocodingResponse> call, Throwable throwable) {
                throwable.printStackTrace();
            }
        });


        return null;
    }
}
