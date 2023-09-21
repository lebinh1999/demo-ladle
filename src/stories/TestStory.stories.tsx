import { Story, StoryDefault } from "@ladle/react"

export default {
    title: "Components",
} satisfies StoryDefault;

export const TestStory: Story = () => {
    return <h1 className=" text-2xl text-emerald-600 text-center">Test Stories</h1>
} 

TestStory.storyName = "Test"