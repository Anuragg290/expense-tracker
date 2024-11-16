import React from "react";
const posts = [
  {
    id: 1,
    title: "Simplifies My Budgeting!",
    href: "#",
    description:
      "This app makes tracking my expenses so easy and straightforward! I love being able to categorize everything and see where my money goes each month",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Perfect for Keeping My Finances on Track",
    href: "#",
    description:
      "As someone who struggles with sticking to a budget, this app has been a lifesaver. The insights and summaries help me stay on top of my spending. Highly recommend!",
    date: "Apr 10, 2024",
    datetime: "2024-04-10",
    author: {
      name: "Sarah Connor",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Great for Setting Monthly Limits",
    href: "#",
    description:
      "I like the budget-setting feature—it helps me avoid overspending. The app is user-friendly and has all the features I need without being complicated.",
    date: "Feb 20, 2024",
    datetime: "2024-02-20",
    author: {
      name: "Anna Sharma",
      imageUrl:
        "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  
  // Add more posts here...
];

const Reviews = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-1xl lg:mx-0" id="posts">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">What Our Users Say</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Real Experiences from People Who Track Their Finances</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-50"/>
                  
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
