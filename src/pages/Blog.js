import React from 'react';
import Lottie from "lottie-react";
import question from '../assets/question.json'

const Blog = () => {
    return (
        <section className="mt-4">
            <Lottie animationData={question} loop={true} className="h-80 mx-auto" />
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl text-center py-5">Blog Side Questions</h2>
		<div className="space-y-4">
			<details className="w-full border cursor-pointer rounded-lg shadow-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> what is cors ?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
			</details>
			<details className="w-full border rounded-lg cursor-pointer shadow-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why are you using firebase? What other options do you have to implement authentication?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter.</p>
			</details>
			<details className="w-full border rounded-lg cursor-pointer shadow-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does the private route work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">The private route component is similar to the public route, the only change is that redirect URL authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
			</details>
			<details className="w-full border rounded-lg cursor-pointer shadow-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Node? How does Node work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return. </p>
			</details>
		</div>
	</div>
</section>
    );
};

export default Blog;