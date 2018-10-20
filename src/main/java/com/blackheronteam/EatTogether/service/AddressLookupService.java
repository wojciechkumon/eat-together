package com.blackheronteam.EatTogether.service;

import com.mapbox.api.geocoding.v5.MapboxGeocoding;
import com.mapbox.api.geocoding.v5.models.CarmenFeature;
import com.mapbox.api.geocoding.v5.models.GeocodingResponse;
import com.mapbox.geojson.Point;
import lombok.extern.log4j.Log4j2;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

@Log4j2
@Service(value = "addressLookupService")
public class AddressLookupService {
    public static final String TOKEN = "pk.eyJ1IjoiZ2FicmllbGFiYXJ0bmlja2EiLCJhIjoiY2puaGhiMjhrMGNzbDNwcjI1ZTUyY2lpOCJ9.9dgyatGtYQ2A59ygu-j3pw";


    public void getMap(String addressQuery, Consumer<Point> consumer) {
        MapboxGeocoding mapboxGeocoding = MapboxGeocoding.builder()
                .accessToken(TOKEN)
                .query(addressQuery)
                .build();


        List<CarmenFeature> points = new ArrayList<>();
        Callback<GeocodingResponse> callback = new Callback<>() {
            @Override
            public void onResponse(@NotNull Call<GeocodingResponse> call, Response<GeocodingResponse> response) {
                if (response.body() == null || !response.isSuccessful()) {
                    log.error("Cannot fetch coordinates for address " + addressQuery);

                    if(response.errorBody() != null) {
                        log.error(response.errorBody());
                    }
                }

                List<CarmenFeature> results = response.body().features();

                if (!results.isEmpty()) {
                    if (results.size() > 1) {
                        log.warn("Found more than 1 address!!! " + results.toString());
                    }

                    Point firstResultPoint = results.get(0).center();
                    log.info("onResponse: " + firstResultPoint.toString());

                    points.addAll(results);

                    consumer.accept(firstResultPoint);

                } else {
                    log.warn("onResponse: No result found");

                }
            }

            @Override
            public void onFailure(Call<GeocodingResponse> call, Throwable throwable) {
                throwable.printStackTrace();
            }
        };

        mapboxGeocoding.enqueueCall(callback);
    }
}
