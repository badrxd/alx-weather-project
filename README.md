# AIO Weather Project

[![Watch the video](https://img.youtube.com/vi/vA1qhtuey1E/hqdefault.jpg)](https://www.youtube.com/embed/vA1qhtuey1E)


## Introduction

Welcome to the AIO Weather Project! This project was developed by a dedicated team of individuals during the ALX curriculum. We aimed to create a comprehensive weather application that leverages APIs, HTTP requests, and state-of-the-art technologies to provide users with accurate and real-time weather information.
First, run the development server:

- **Deployed Site:** [AIO Weather Project](https://alx-weather-project.vercel.app/)
- **Final Project Blog Article:** [Project Blog](#)

- **Authors:**
  - [Assoul Jaouad](#)
  - [Badr Eddine Ouydir](https://www.linkedin.com/in/badr-eddine-oyudir/)
  - [Omar Id Hmaid](https://www.linkedin.com/in/omar-id-hmaid/)

## Story

As we went through the ALX curriculum, we learned about how APIs 
work. When our project started, we thought about using what we 
learned about APIs and HTTP requests. We found that a Weather API 
is a popular and free option that we can use. We also realized that 
mastering APIs and HTTP requests would be a good practice, so we 
decided to include it in our project.

## Installation

To run the AIO Weather Project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/badrxd/alx-weather-project.git`
2. Navigate to the project directory: `cd alx-weather-project`
3. Install dependencies: `npm install`
4. Start the application:

```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
```
## Usage

Once the installation is complete, you can access the AIO Weather Project by opening your web browser and navigating to [http://localhost:3000](http://localhost:3000).


- **Learn More:**

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

- **Deploy on Vercel:**

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Challenges

- **Technical challenges:**
We faced a problem where lots of components in our App needed information from their main parts. Also, the way we found where a user 
location is didn't work quite right—it was giving us the server's location instead of the user's location. Another issue was that when 
someone refresh the page, all the information reset to the initial values, and we lost where the user was and their weather details...
To fix these things, we made changes. First, we started using Redux Toolkit to help different parts of our program share information more 
easily. It made passing around necessary details smoother between the different components. At the same time, we went into the code that 
figures out where the user is and made some changes by adding another code on the client side to get its IP and pass it to the base code to 
make sure it gives us the right location, not the server's location.
This way, when someone reloads the page, the Data doesn't vanish anymore. It stays where it should be, like the user's location and the 
weather for that location. Looking back, these changes not only made our program work better but also taught us the importance of tackling 
problems from different angles for a solid solution.
- **non-technical challenges:**
One of the toughest challenges we faced wasn't about technical stuff but more about finding the right balance between work and life. It 
wasn't just about managing time but figuring out how to handle our jobs, personal goals, and family commitments without feeling 
overwhelmed.
Trying to be successful in our ALX project while also chasing personal dreams made it feel like we were walking a tightrope. we had to learn 
not just how to organize our time but also to decide what's most important and when to say 'no' to things that could add too much stress.
Overcoming this challenges wasn't just about managing time better; it was about finding a way to live aligns with what we care about the 
most. It taught us that success isn't just about work achievements but also about building a life that feels right for us.
## Blog article:

[Linkedin Blog](https://www.linkedin.com/pulse/aio-weather-project-showcase-omar-id-hmaid-0xtcc)

## Contributing

We welcome contributions from the community! If you'd like to contribute to the project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request.

## Related Projects

Check out these related projects for more inspiration:

1. [Another Weather App](https://www.dehao.tech/weather/)
2. [API Mastery Project](https://api.weatherapi.com/)

## Licensing

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
