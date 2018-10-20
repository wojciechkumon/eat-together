package com.blackheronteam.EatTogether.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@AllArgsConstructor
@Entity
@Builder
public class User implements UserDetails {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="Address" , referencedColumnName="id",nullable=false)
    Address address;
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    List<UserRate> userRates = new ArrayList<>();
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    List<ChefRate> chefRates = new ArrayList<>();


    public User(String username, String password, String firstName, String lastName) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
