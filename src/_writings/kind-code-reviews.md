---
layout: writing
title: "Kind code reviews"
summary: "Code reviews can be tough for everyone involved. If it's your code, you've put your work out there to be critiqued. If you're a reviewer, you have to balance critique and criticism. What's the difference? The approach: critique offers a balanced and constructive approach to review, while criticism is subjective and often focuses on flaws. Both can get the job done, but one of these is more effective long term."
date: 2024-08-18 19:45:52 -0400
categories: programming, software development
---

> “Hello babies. Welcome to Earth. It's hot in the summer and cold in the winter. It's round and wet and crowded. On the outside, babies, you've got a hundred years here. There's only one rule that I know of, babies – God damn it, you've got to be kind.”
>
> ― Kurt Vonnegut

Code reviews can be tough for everyone involved. If it's your code, you've put your work out there to be critiqued. If you're a reviewer, you have to balance critique and criticism. What's the difference? The approach: critique offers a balanced and constructive approach to review, while criticism is subjective and often focuses on flaws. Both can get the job done, but one of these is more effective long term.

It's easy to go through a pull request and review the code by pointing out each flaw line by line. I think we've all had a review go that way, with the reviewer copying and pasting the same message onto each offending line. These reviews often showcase a lack of attention to detail and indicate more work to do before this code is ready for prime time. They also show that the price of screwing up is being made into a public example.

What I've found is that in these cases, an exhaustive review of each line only calls the engineer out for their shortcomings and acts more like a public shaming. I think it's more beneficial to keep these comments as a draft and talk to the engineer about their work. Offer to pair and go through their code to talk about potential improvements. Use published comments to provide examples of solutions, to call out where things went _right_, and to offer suggestions. Just like in code, "Don't repeat yourself" applies.

Does this approach take more time? Sure it does! Collaboration isn't instantaneous and the cost is always time. The benefits outweigh the cost: talking it out and pairing allows us to connect with other engineers and provides informal mentoring opportunities. We share knowledge across the organization every time we code together. This also increases <a href="https://www.infoq.com/articles/psychological-safety-tech-teams/" target="_blank" rel="noopener noreferrer">psychological safety</a> by allowing engineers at any level to make mistakes and recover without humiliation.

By using code reviews as an opportunity to offer examples and suggestions, we get to treat each code review as its own resource with notes on how to code for both the present and the future. It becomes an exercise on refactoring and teaches everyone who participates something new.
