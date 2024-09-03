# Totality Frontend Challenge

A responsive Rental Housing Marketplace frontend with multiple cart systems, booking management, smooth transitions, and a clean UI. Built with Next.js, TypeScript, Tailwind CSS, and GSAP animations.

![Next.js](https://img.shields.io/badge/Next.js-v13.4-blue.svg?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-v4.9-blue.svg?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.3-blue.svg?style=for-the-badge&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-v3.11-green.svg?style=for-the-badge&logo=greensock)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/username/totality-frontend-challenge.git
   ```
2. Navigate to the project directory:
   ```bash
   cd totality-frontend-challenge
   ```
3. Install the necessary dependencies:
   ```bash
   npm install next gsap typescript tailwindcss @herotofu/react
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

Once installed, you can start the development server and access the project at http://localhost:3000. Below is a walkthrough of the main features, with accompanying screenshots:

1. Property Listing

When you first open the website at localhost:3000, you will be greeted by the property listing page.
![Property Listing](public/screenshots/1.png)

2. Location Search

Clicking on the search bar reveals the available property locations. After selecting a location and clicking the search button, the search will be implemented, filtering the properties accordingly.
![Location Search](public/screenshots/2.png)

3. Filter Popup

By clicking the filter button, a popup will appear over the screen, allowing you to sort and filter the properties based on various criteria.
![Filter Popup](public/screenshots/3.png)

4. Booking a Property

Each property card has a "Book Now" button. When clicked, a small popup will confirm that the item has been added to your cart.
![Filter Popup](public/screenshots/4.png)
![Filter Popup](public/screenshots/4.1.png)

5. Cart Details

Clicking "Go to Cart" within the booking confirmation popup will take you to the cart page, where a more detailed version of the selected property is displayed.
![Cart Details](public/screenshots/5.png)

6. Checkout Process

On the cart page, clicking the "Checkout" button will open a form where you can enter your details to complete the booking process.
![Checkout Process](public/screenshots/6.png)

7. Functional Contact Us Form

The application includes a fully functional "Contact Us" form. When submitted, the form details are sent directly to me.
![Functional Contact Us Form](public/screenshots/7.png)

8. Login Form

A simple, yet elegant login form is provided as part of the frontend, allowing users to enter their credentials.
![Login Form](public/screenshots/8.png)

9. Signup Page

Similarly, a signup page is included, which is also part of the frontend implementation.
![Signup Page](public/screenshots/9.png)

## Features

- **Component-Based Architecture**: Code is structured using reusable components to ensure modularity and maintainability.
- **Booking System**: Users can book properties, which are then saved into the cart section for later checkout.
- **Filter Component**: A powerful filter component that enables users to filter properties based on specific criteria.
- **Customizable Checkout Bar**: The checkout process is flexible and can be tailored to the user's needs.
- **Responsive Design**: The UI is fully responsive and works seamlessly across all devices, ensuring a consistent experience.

## Contributing

Contributions are what make the open-source community such a wonderful place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Vishal Aditya Kirtaniya - [LinkedIn](https://www.linkedin.com/in/vishalkirtaniya) - vishalkirtaniyaofficial@gmail.com

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [HeroTofu](https://herotofu.com/)
