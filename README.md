# Saasa meal

> Saasa meal is a meat-free lifestyle platform, indulging you with delicious discounted vegetarian meals at cozy environments. We are working on this website.

## Teck Stacks

- NodeJS
- React
- Chakra UI
- Redux
- React-router-dom
- React-redux
- Redux-thunk
- Vercel

## Flow

```mermaid
graph TD;
    HomePage-->loginPage;
    loginPage-->SignUpPage;
      SignUpPage-->loginPage;
       loginPage-->HomePage;
       HomePage --> MealDeals
       MealDeals --> SingleMeal
       HomePage -->Recipes
       HomePage --> KindMoments
```
