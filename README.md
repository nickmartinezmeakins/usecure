This uses Next.js and Typescript. I wanted to create a couple of unit tests for the quiz but ran out of time and I also would've liked to have used Storybook. Uses Plop for generating the components and Tailwind for styling. I had the design system I could've spent a lot more time to get the Tailwind config matching the designs exactly. On reflection I probably would've made the Nav buttons fixed to the bottom on mobile but I think this qorks OK like this. It's all using local state but I would've liked to use LocalStorage to save the user data although I expect that in the real world the score would be pushed up somewhere and then the initial quiz logic would run through that (has this been completed and passed etc). 

I have made a few assumptions here that I would've raised during a desing handover but I think this works well. 

I believe this is fully accessable and have structured this as I would on a project (using Atomic design principles, sorry James!)

## Getting Started

Use nvm - 18.18.0
```bash
 npm i

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
