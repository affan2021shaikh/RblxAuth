# RblxAuth©



## Contents

- [Introduction](#introduction)  
- [Features](#features)  
- [How to Use RblxAuth©](#how-to-use-rblxauth)  
- [Registering a Service (Zone)](#registering-a-service-zone)  
- [Payments & Upgrades](#payments--upgrades)  
- [API Endpoints](#api-endpoints)  
- [Terms and Conditions](#terms-and-conditions)  
- [License](#license)  
- [Support & Contact](#support--contact)  

---

## Introduction

RblxAuth© is a **hosted Roblox authentication service** that allows external websites and services to verify Roblox users securely via a Roblox game and centralized backend.  

You **do not** host the backend yourself — the service runs exclusively under our control to ensure security and consistency.

---

## Features

- Secure user verification through unique login codes  
- One free “zone” (service) per Roblox user ID (UID)  
- Additional zones available via payment in Robux or real money  
- Simple JSON API for verifying login codes  
- Full payment tracking and auditing  
- Strict license and Terms & Conditions  

---

## How to Use RblxAuth©

1. Your users visit your website and start a login.  
2. Your backend requests a unique login code from RblxAuth© API.  
3. Your user opens the official RblxAuth© Roblox game and enters the login code.  
4. The game associates the code with their Roblox UID.  
5. Your backend polls the API to confirm the code and retrieve the user’s UID and username/display name.  

---

## Registering a Service (Zone)

- To use RblxAuth© for your site, you must register a “zone.”  
- Registration happens by launching the official RblxAuth© Roblox game.  
- You will receive a **unique, random password** for your zone — this password authenticates your service to the backend.  
- This password is shown **only once** and cannot be changed or recovered.  
- Each Roblox UID may register **only one free zone**. Additional zones require payment.  

---

## Payments & Upgrades

- Upgrade your service by purchasing additional zones.  
- Payments accepted in Robux or real currency.  
- Real currency payments generate a unique redeem code.  
- Redeem codes must be submitted during checkout and verified in the system.  
- All transactions are logged and audited to prevent abuse.  

---

## API Endpoints

### Authentication

#### Generate Login Code

- **Endpoint:** `/api/generate-code`  
- **Method:** POST  
- **Headers:**  
  - `Authorization: Bearer <zone-password>`  
- **Body:**  
```json
{
  "user_id": "string"  // optional, to associate login code with user
}
````

* **Response:**

```json
{
  "login_code": "string",
  "expires_in": 300 // seconds
}
```

* **Description:** Generates a temporary login code your user enters in the Roblox game.

---

#### Verify Login Code

* **Endpoint:** `/api/verify-code?code=<login_code>`
* **Method:** GET
* **Headers:**

  * `Authorization: Bearer <zone-password>`
* **Response:**

```json
{
  "valid": true,
  "user_id": "roblox_user_id",
  "username": "roblox_username",
  "display_name": "roblox_display_name"
}
```

* **Description:** Checks if the login code is valid and returns the associated Roblox user information.

---

### Service Management

#### Register New Service (Zone)

* **Endpoint:** `/api/register-service`
* **Method:** POST
* **Headers:**

  * `Authorization: Bearer <roblox_auth_master_key>`
* **Body:**

```json
{
  "roblox_uid": "string"
}
```

* **Response:**

```json
{
  "zone_password": "string"
}
```

* **Description:** Registers a new service (zone) for the given Roblox UID, returning the unique zone password.

---

### Payment Verification

#### Verify Payment Redeem Code

* **Endpoint:** `/api/verify-payment`
* **Method:** POST
* **Headers:**

  * `Authorization: Bearer <zone-password>`
* **Body:**

```json
{
  "redeem_code": "string"
}
```

* **Response:**

```json
{
  "success": true,
  "message": "Redeem code applied successfully."
}
```

* **Description:** Verifies the redeem code from payment and unlocks additional zones.

---

## Terms and Conditions

**Last Updated:** 2025-07-30

Welcome to RblxAuth©. By using this service, you agree to the following terms:

1. **License and Use**
   You are granted a limited, non-transferable license to use RblxAuth© for user authentication only. No redistribution, modification, or resale is permitted without explicit written permission.

2. **User Responsibilities**
   You must ensure users accept these terms before authenticating via RblxAuth©. Any misuse, fraud, or abuse may result in immediate termination of service.

3. **Service Access**
   RblxAuth© backend is centrally hosted and may be updated, restricted, or suspended at our discretion. You do not have the right to self-host or mirror the backend.

4. **Payments and Upgrades**
   Payment transactions are final. Refunds or chargebacks are subject to review and may affect your access to additional zones.

5. **Prohibited Actions**
   Reverse engineering, scraping, unauthorized API access, and attempts to bypass security measures are strictly forbidden.

6. **Termination**
   We reserve the right to terminate accounts and revoke access at any time for violations of these terms.

7. **Liability**
   RblxAuth© is provided “as-is” without warranties. We are not liable for any damages arising from use or inability to use the service.

8. **Changes to Terms**
   Terms may be updated without prior notice. Continued use constitutes acceptance of the new terms.

---

## License

This project is licensed under a **strict, no reuse license**.
No copying, modifying, redistributing, or commercial use is allowed without explicit permission from the author.

See [LICENSE](LICENSE) for full details.

---

## Support & Contact

* Join our Discord: [https://discord.gg/yourdiscordlink](https://discord.gg/yourdiscordlink)
* Report issues on GitHub Issues
* Email: [your.email@example.com](mailto:your.email@example.com)

---

*Made with ❤️ by Affan Shaikh*
