package com.sdu.diploma.service;

import org.springframework.beans.factory.annotation.Value;
import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

@Service
public class LoginAttemptService {
    @Value("2")
    private Integer MAX_ATTEMPT;

    @Value("1")
    private Integer TIMEOUT_MINUTES;

    private LoadingCache<String, Integer> attemptsCache;
    public LoginAttemptService() {
        super();
    }

    @PostConstruct
    public void init() {
        attemptsCache = CacheBuilder.newBuilder().
                expireAfterWrite(TIMEOUT_MINUTES, TimeUnit.MINUTES).build(new CacheLoader<String, Integer>() {
                    public Integer load(String key) {
                        return 0;
                    }
                });
    }

    public void loginSucceeded(String key) {
        attemptsCache.invalidate(key);
    }

    public void loginFailed(String key) {
        int attempts = 0;
        try {
            attempts = attemptsCache.get(key);
        } catch (ExecutionException e) {
            attempts = 0;
        }
        attempts++;
        attemptsCache.put(key, attempts);
    }

    public boolean isBlocked(String key) {
        try {
            return attemptsCache.get(key) >= MAX_ATTEMPT;
        } catch (ExecutionException e) {
            return false;
        }
    }

}
