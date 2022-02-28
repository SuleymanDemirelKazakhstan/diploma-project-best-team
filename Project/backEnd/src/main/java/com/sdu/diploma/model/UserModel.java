package com.sdu.diploma.model;

import com.sdu.diploma.service.UserDetailsImpl;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "main",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "id")

        })
@Data
public class UserModel extends UserDetailsImpl {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String password;

    private String role;

    private String email;
}
