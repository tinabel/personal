---
layout: writing
title: "Using AI for Good"
summary: "It seems like AI is everywhere. Companies are slathering LLMs on like Frank's Red Hot, hoping that generative AI is the special sauce they need to grab more revenue. As a visual artist, I haven't been keen on AI, as apps like MidJourney and others have plagiarized from a lot of hard-working artists. Then there's the resource-intensive processing requirements that seem to be increasing every day. As a software engineer (developer/programmer/codemonkey), I have to admit that I'm curious about the _good_ ways we can use generative AI that don't harm creators and how we can limit unnecessary AI use to curb resource consumption."
date: 2024-08-21 14:12:52 -0400
categories: programming, software development
---

It seems like AI is everywhere. Companies are slathering LLMs on like Frank's Red Hot, hoping that generative AI is the special sauce they need to grab more revenue. As a visual artist, I haven't been keen on AI, as apps like MidJourney and others <a href="https://petapixel.com/2022/12/21/midjourny-founder-admits-to-using-a-hundred-million-images-without-consent/" target="_blank" rel="noopener noreferrer">have plagiarized from a lot of hard-working artists</a>. Then there's the <a href="https://www.scientificamerican.com/article/the-ai-boom-could-use-a-shocking-amount-of-electricity/" target="_blank" rel="noopener noreferrer">resource</a>-<a href="https://www.popsci.com/technology/ai-more-energy/" target="_blank" rel="noopener noreferrer">intensive</a> <a href="https://www.wired.com/story/ai-energy-demands-water-impact-internet-hyper-consumption-era/" target="_blank" rel="noopener noreferrer">processing</a> requirements that seem to be increasing every day. As a software engineer (developer/programmer/codemonkey), I have to admit that I'm curious about the _good_ ways we can use generative AI that don't harm creators and how we can limit unnecessary AI use to curb resource consumption.

## First, the inevitable criticisms

Any time a new technology comes out, there are concerns about how resource-intensive it's going to be. Computers use plastic, metals, and silicon, not to mention the amount of electricity it takes to run a computer. That has been a concern for decades. Faster processers take more energy, give off more heat, need more cooling. Power expenditure goes up and up. I can't fight that on my own, but I can be discerning when it comes to what kind of consumer I want to be.

## So what are my hard limits?

First, using any sort of generative AI to create music, prose, or imagery is out. I don't need it, I don't want it, and I think that using AI to bypass hiring artists does real harm to creative people. Second, the only thing I want to use AI for is to learn and to free up time that I'd otherwise spend doing repetitive tasks. Third, I don't trust AI to do things that I don't already know how to do -- I know, I said that I want to use it to learn, but that's different. If I'm using AI to learn, I'm using it to help me comprehend concepts by giving me bare examples that I can expand on. I don't expect anything it gives me to be perfect, I just want a jumping off point to explore.

## How can I be as ethical as possible while using AI?

In terms of programming, I can put as many guardrails in place as possible. I've been playing around with GitHub Copilot and Codeium on personal projects and Copilot at work, and here are some of the things I do to make sure that I'm playing as fair as can be.

### Never take an answer at face-value

Just like any StackOverflow answer you may find, _do not copy and paste code verbatim_. Evaluate the code and what it does, understand it. Test it out, make sure it works, and then ensure that you _know_ how it works. This stuff isn't magic.

The biggest thing to understand is that if you use AI generated code and claim it as your own, you will be responsible for every inaccuracy introduced into your codebase. If you don't know why or how you introduced the bug, how are you going to fix it?

### Use these tools to understand your work, not to do everything for you

One of my favorite new fun things is to ask Copilot or Codeium to "roast my code". I want to understand where I can improve and this is a fun way to figure out how to improve my code in a very low-stakes way. I've had some face-palm moments where one of my projects has had redundancies that I overlooked and I've also had responses that I've taken with more than a few grains of salt, but it's interesting to see what the tools come up with.

I've also used AI tools to see what design patterns I use the most frequently in my work. I find that this actually helps me understand my own development process a little better over time.

### Use AI as a starting point, not a finish line

Never think of anything written by AI as production-worthy code. If you're using Codeium to scaffold unit tests from code you've written, great. Just don't expect those tests to do much. You're going to have to put in the effort to make the tests reflect the code, but you'll have the basic structure in place.

If you're overwhelmed at the beginning of a project, if that empty file staring back at you from the screen, using a prompt to start things off may be what you need to shake yourself out of the block. It can be fantastic for that, and I highly recommend writing a few sentences in a markdown doc about what you want to accomplish and use them as a prompt to jump start your brain.

### Use it as a tiny little back-up brain

I've been writing code for a long time. Not COBOL long, but Geocities long. I forget things that I know, mix up names, and otherwise behave like a codger. Context-switching can make that worse. If I've spent a day in JavaScript land and then try to write some Ruby, I'm definitely going to mix up syntaxes. Having code completions turned on can help with that. Being able to pull up an inline prompt to jog my memory also helps.

## Use responsibly

Ultimately, AI isn't a special sauce you can spread on everything. It's just a tool that you can use. You make choices when you use it: you decide if you're going to blindly trust ouput or if you're going to test every single syllable of the code. You choose to keep the code it spits out verbatim (and risk plagiarism), or to understand every line you use and ensure that you're doing the work. You can have fun with it, but remember that these answers are pulled from a large pool of information that may not always be accurate. Nothing it does replaces actual knowledge and hard work.
