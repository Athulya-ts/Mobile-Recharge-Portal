// package com.recharge.mobilerecharge.dto.request;

// import lombok.AllArgsConstructor;
// import lombok.Builder;
// import lombok.Data;
// import lombok.NoArgsConstructor;
// import lombok.NonNull;

// @Data
// @Builder
// @NoArgsConstructor
// @AllArgsConstructor
// public class RegisterRequest {
//     @NonNull
//     private String name;

//     @NonNull
//     private String email;

//     @NonNull
//     private String password;

//     // @NonNull
//     // private String mobileNumber;

//     @NonNull
//     private String confirmPassword;
// }
package com.recharge.mobilerecharge.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    @NonNull
    private String name;

    @NonNull
    private String email;

    @NonNull
    private String password;

    // @NonNull
    // private String mobileNumber;

    @NonNull
    private String confirmPassword;
}