package com.blackheronteam.EatTogether.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.provider.token.TokenStore;

@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    private static final String CLIEN_ID = "EatTogether";
    private static final String CLIENT_PASSWORD = "eattogether_password";

    private static final String PASSWORD = "password";
    private static final String AUTHORIZATION_CODE = "authorization_code";
    private static final String REFRESH_TOKEN = "refresh_token";
    private static final String IMPLICIT = "implicit";

    static final String SCOPE_READ = "read";
    static final String SCOPE_WRITE = "write";

    static final int ACCESS_TOKEN_VALIDITY_SECONDS = Integer.MAX_VALUE;
    static final int FREFRESH_TOKEN_VALIDITY_SECONDS = Integer.MAX_VALUE;

    @Autowired
    private TokenStore tokenStore;

    @Autowired
    private AuthenticationManager authenticationManager;


    @Autowired
    private BCryptPasswordEncoder encoder;

    @Override
    public void configure(ClientDetailsServiceConfigurer configurer) throws Exception {

        configurer
                .inMemory()
                .withClient(CLIEN_ID)
                .secret(encoder.encode(CLIENT_PASSWORD))

                .authorizedGrantTypes(PASSWORD, AUTHORIZATION_CODE, REFRESH_TOKEN, IMPLICIT)

                .scopes(SCOPE_READ, SCOPE_WRITE)
                .accessTokenValiditySeconds(ACCESS_TOKEN_VALIDITY_SECONDS)
                .refreshTokenValiditySeconds(FREFRESH_TOKEN_VALIDITY_SECONDS);
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) {

        endpoints.tokenStore(tokenStore)
                .authenticationManager(authenticationManager);
    }
}