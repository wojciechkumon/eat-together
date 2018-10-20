package com.blackheronteam.EatTogether.service.datagenerators;

import com.blackheronteam.EatTogether.domain.Address;
import com.blackheronteam.EatTogether.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("addressDataGenerator")
public class AddressDataGenerator {

    @Autowired
    AddressRepository addressRepository;


    public void generate() {

        Address address1 = Address.builder()
                .city("Warszawa")
                .phoneNumber("")
                .country("Polska")
                .streetWithNumber("Chmielna 26")
                .zip("00-844").build();

        Address address2 = Address.builder()
                .city("Warszawa")
                .phoneNumber("")
                .streetWithNumber("Grzybowska 63")
                .country("Polska")
                .zip("05-077").build();

        Address address3 = Address.builder()
                .city("Warszawa")
                .phoneNumber("")
                .streetWithNumber("Chmielna 13a")
                .country("Polska")
                .zip("00-021").build();

        Address address4 = Address.builder()
                .city("Krakow")
                .phoneNumber("")
                .streetWithNumber("Krakowska 27")
                .country("Polska")
                .zip("31-062").build();

        Address address5 = Address.builder()
                .city("Przemysl")
                .phoneNumber("")
                .streetWithNumber("Wojciecha Brudzewskiego 1")
                .country("Polska")
                .zip("37-700").build();

        Address address6 = Address.builder()
                .city("Warszawa")
                .phoneNumber("")
                .streetWithNumber("aleja Niepodleglosci 213")
                .country("Polska")
                .zip("02-086").build();

        addressRepository.save(address1);
        addressRepository.save(address2);
        addressRepository.save(address3);
        addressRepository.save(address4);
        addressRepository.save(address5);
        addressRepository.save(address6);
    }
}
