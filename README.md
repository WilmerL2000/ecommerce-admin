<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <h1 align="center">Ecommerce Admin Dashboard</h1>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692461750/GitHub/ecommerce/admin%20dashboard/home_u8yorn.png" width="100%" >
  <p align="center">
    <a href="https://ecommerce-admin-eosin-pi.vercel.app/" target="_blank">Web Page</a>
  </p>
</div>

## Test User

- Email:
  ```
   test@gmail.com
  ```
- Password:
  ```
   Test123
  ```
  <br/>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>
    <strong>
        Table of Contents
    </strong>
  </summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#desktop">Desktop</a></li>
        <li><a href="#mobile">Mobile</a></li>
      </ul>
    </li>
    <li>
      <a href="#api">API</a>
      <ul>
        <li><a href="#routes-list">Routes List</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a Full Stack E-Commerce development with Next.js 13, React, Tailwind, Prisma, and MySQL, including Dashboard and CMS creation.

### Features

- Clerk Authentication.
- Our admin dashboard is going to serve as both CMS, Admin and API.
- Control mulitple vendors / stores through this single CMS.
- Create, update and delete categories.
- Create, update and delete products.
- Upload multiple images for products, and change them.
- Create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
- Create, update and delete "Billboards" which are these big texts on top of the page. Attach them to a single category, or use them standalone.
- Search through all categories, products, sizes, colors, billboards with included pagination.
- Control which products are "featured" so they show on the homepage.
- See your orders, sales, etc.
- See graphs of your revenue, etc.
- Order creation.
- Stripe checkout.
- Stripe webhooks.
- MySQL + Prisma + PlanetScale.

### Tech Stack

<table>
    <tr>
      <td align="center" width="96">          
        <br><strong>Tech</strong>
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487162/GitHub/assets/image_20211214122557_0_h9qr5m.png" width="48" height="48" alt="Next.js" />
        <br><strong>Next.js</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487163/GitHub/assets/react_original_logo_icon_146374_whazfv.png" width="48" height="48" alt="React" />
        <br><strong>React</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1691279171/GitHub/assets/FxoIFVgagAE-gqB_cmvwxg.png" width="48" height="48" alt="Shadcn" />
        <br><strong>Shadcn</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487162/GitHub/assets/file_type_typescript_official_icon_130107_svjybp.png" width="48" height="48" alt="TypeScript" />
        <br><strong>TypeScript</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487162/GitHub/assets/file_type_tailwind_icon_130128_mwu7ie.png" width="48" height="48" alt="Tailwind CSS" />
        <br><strong>Tailwind CSS</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1692338137/GitHub/assets/clerk_komgg5.png" width="48" height="48" alt="Clerk" />
        <br><strong>Clerk</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682537001/GitHub/assets/axios_hhohil.png" width="48" height="48" alt="Axios" />
        <br><strong>Axios</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682489027/GitHub/assets/zustand_dyq4zd.png" width="64" height="48" alt="Zustand" />
        <br><strong>Zustand</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1686199264/GitHub/assets/prisma_she1mb.png" width="64" height="48" alt="Prisma" />
        <br><strong>Prisma</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1686199544/GitHub/assets/reacthookform_kekzdz.png" width="64" height="48" alt="React Hook Form" />
        <br><strong>React Hook Form</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682564470/GitHub/assets/cloudinary_sjvklt.png" width="64" height="48" alt="Next Cloudinnary" />
        <br><strong>Next Cloudinnary</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1692309474/GitHub/assets/Stripe_vpx3ha.png" width="64" height="48" alt="Stripe" />
        <br><strong>Stripe</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487162/GitHub/assets/mysql_logo_icon_169940_gkaoha.png" width="64" height="48" alt="MySQL" />
        <br><strong>MySQL</strong>        
      </td>      
    </tr>
     <tr>
      <td align="center" width="96">          
        <br><strong>Version</strong>
      </td>      
      <td align="center" width="96">
        <br>13.4.9
      </td>      
      <td align="center" width="96">
        <br>18.2.0
      </td>      
      <td align="center" width="96">
      </td>      
      <td align="center" width="96">
        <br>5.1.6
      </td>      
      <td align="center" width="96">
        <br>3.3.2
      </td>      
      <td align="center" width="96">
        <br>4.21.15
      </td>      
      <td align="center" width="96">
        <br>1.4.0
      </td>      
      <td align="center" width="96">
        <br>4.3.9
      </td>      
      <td align="center" width="96">
        <br>5.0.0
      </td>      
      <td align="center" width="96">
        <br>7.45.1
      </td>      
      <td align="center" width="96">
        <br>4.15.0
      </td>      
      <td align="center" width="96">
        <br>12.15.0
      </td>      
      <td align="center" width="96">
      </td>     
    </tr>
  </table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Desktop

<div align="center">
  <div>
    <h3>Modal Create Store</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692399190/GitHub/ecommerce/admin%20dashboard/modal_ctuk6f.png" width="100%" >
  </div>
  <div>
    <h3>Billboards List</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692399191/GitHub/ecommerce/admin%20dashboard/billboards_hjdrel.png" width="100%" >
    <h3>Create Billboard</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692399266/GitHub/ecommerce/admin%20dashboard/create_billboard_fsgrhv.png" width="100%" >
  </div>
  <div>
    <h3>Products List</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692399191/GitHub/ecommerce/admin%20dashboard/products_qydgxo.png" width="100%" >
    <h3>Create Product</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692399267/GitHub/ecommerce/admin%20dashboard/create_product_aadgvk.png" width="100%" >
    <h3>Edit Product</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692469688/GitHub/ecommerce/admin%20dashboard/edit_product_uu0t0j.png" width="100%" >
  </div>
  <div>
    <h3>API Endpoints</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692399192/GitHub/ecommerce/admin%20dashboard/api_url_p4qfls.png" width="100%" >
  </div>
  <div>
    <h3>Orders List</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692399192/GitHub/ecommerce/admin%20dashboard/orders_ue3m2m.png" width="100%" >
  </div>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Mobile

<div align="center">
  <div>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692399192/GitHub/ecommerce/admin%20dashboard/mobile1_e0bd2l.png" width="100%" >
  </div>
  <div>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1692399193/GitHub/ecommerce/admin%20dashboard/mobile2_drmz1j.png" width="100%" >
  </div>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

_Follow the instructions below_

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/WilmerL2000/ecommerce-admin.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Setup `.env` file

   ```js
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
    CLERK_SECRET_KEY =

    NEXT_PUBLIC_CLERK_SIGN_IN_URL =
    NEXT_PUBLIC_CLERK_SIGN_UP_URL =
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL =
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL =

    DATABASE_URL =
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME =

    STRIPE_API_KEY =
    STRIPE_WEBHOOK_SECRET =
    FRONTEND_STORE_URL =
   ```

4. Connect to PlanetScale and Push Prisma

   ```shell
    npx prisma generate
    npx prisma db push
   ```

5. Start the app
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- REST API -->

# API

## API URL

`http://localhost:3000`

## Routes List:

### Stores

#### 1. Create Store

> Route

```
 POST /api/stores
```

> Body

```javascript
    {
      name: String,
    }
```

#### 2. Edit Store

> Route

```
 PATCH /api/stores/{storeId}
```

> Paremeter

```javascript
storeId: String;
```

> Body

```javascript
    {
      name: String,
    }
```

#### 2. Delete Store

> Route

```
 DELETE /api/stores/{storeId}
```

> Paremeter

```javascript
storeId: String;
```

## Store ID

> Initial route for each sub route

```
 /api/{storeId}
```

### Billboards

#### 1. Create Billboard

> Route

```
 POST /billboards
```

> Paremeter

```javascript
storeId: String;
```

> Body

```javascript
    {
      label: String,
      imageUrl: String
    }
```

#### 2. Get Billboards

> Route

```
 GET /billboards
```

> Paremeter

```javascript
storeId: String;
```

#### 3. Get Billboard

> Route

```
 GET /billboards/{billboardId}
```

> Paremeter

```javascript
billboardId: String;
```

#### 4. Update Billboard

> Route

```
 PATCH /billboards/{billboardId}
```

> Paremeters

```javascript
billboardId: String;
storeId: String;
```

> Body

```javascript
    {
      label: String,
      imageUrl: String
    }
```

#### 5. Delete Billboard

> Route

```
 DELETE /billboards/{billboardId}
```

> Paremeters

```javascript
billboardId: String;
storeId: String;
```

### Categories

#### 1. Create Category

> Route

```
 POST /categories
```

> Paremeter

```javascript
storeId: String;
```

> Body

```javascript
    {
      name: String,
      billboardId: String
    }
```

#### 2. Get Categories

> Route

```
 GET /categories
```

> Paremeter

```javascript
storeId: String;
```

#### 3. Get Category

> Route

```
 GET /categories/{categoryId}
```

> Paremeter

```javascript
categoryId: String;
```

#### 4. Update Category

> Route

```
 PATCH /categories/{categoryId}
```

> Paremeters

```javascript
categoryId: String;
storeId: String;
```

> Body

```javascript
    {
      name: String,
      billboardId: String
    }
```

#### 5. Delete Category

> Route

```
 DELETE /categories/{categoryId}
```

> Paremeters

```javascript
categoryId: String;
storeId: String;
```

### Checkout

#### 1. Payment

> Route

```
 POST /checkout
```

> Body

```javascript
    {
      productIds: Array,
    }
```

### Colors

#### 1. Create Color

> Route

```
 POST /colors
```

> Paremeter

```javascript
storeId: String;
```

> Body

```javascript
    {
      name: String,
      value: String
    }
```

#### 2. Get Colors

> Route

```
 GET /colors
```

> Paremeter

```javascript
storeId: String;
```

#### 3. Get Color

> Route

```
 GET /colors/{colorId}
```

> Paremeter

```javascript
colorId: String;
```

#### 4. Update Color

> Route

```
 PATCH /colors/{colorId}
```

> Paremeters

```javascript
colorId: String;
storeId: String;
```

> Body

```javascript
    {
      name: String,
      value: String
    }
```

#### 5. Delete Color

> Route

```
 DELETE /colors/{colorId}
```

> Paremeters

```javascript
colorId: String;
storeId: String;
```

### Products

#### 1. Create Product

> Route

```
 POST /products
```

> Paremeter

```javascript
storeId: String;
```

> Body

```javascript
    {
      name: String,
      price: Decimal,
      categoryId: String,
      colorId: String,
      sizeId: String,
      images: Array,
      isFeatured: Boolean,
      isArchived: Boolean
    }
```

#### 2. Get Products

> Route

```
 GET /products
```

> Paremeter

```javascript
storeId: String;
```

#### 3. Get Product

> Route

```
 GET /products/{productId}
```

> Paremeter

```javascript
productId: String;
```

#### 4. Update Product

> Route

```
 PATCH /products/{productId}
```

> Paremeters

```javascript
productId: String;
storeId: String;
```

> Body

```javascript
    {
      name: String,
      price: Decimal,
      categoryId: String,
      colorId: String,
      sizeId: String,
      images: Array,
      isFeatured: Boolean,
      isArchived: Boolean
    }
```

#### 5. Delete Product

> Route

```
 DELETE /products/{productId}
```

> Paremeters

```javascript
productId: String;
storeId: String;
```

### Sizes

#### 1. Create Size

> Route

```
 POST /sizes
```

> Paremeter

```javascript
storeId: String;
```

> Body

```javascript
    {
      name: String,
      value: String
    }
```

#### 2. Get Sizes

> Route

```
 GET /sizes
```

> Paremeter

```javascript
storeId: String;
```

#### 3. Get Size

> Route

```
 GET /sizes/{sizeId}
```

> Paremeter

```javascript
sizeId: String;
```

#### 4. Update Size

> Route

```
 PATCH /sizes/{sizeId}
```

> Paremeters

```javascript
sizeId: String;
storeId: String;
```

> Body

```javascript
    {
      name: String,
      value: String
    }
```

#### 5. Delete Size

> Route

```
 DELETE /sizes/{sizeId}
```

> Paremeters

```javascript
sizeId: String;
storeId: String;
```

<!-- CONTACT -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

`Wilmer Lopez Cespedes`

- Correo: wilmerlopezcespedes@gmail.com
- <a href="https://www.linkedin.com/in/wilmer-lopez-cespedes/" target="_blank">LinkedIn</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
