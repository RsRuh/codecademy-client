import React from 'react';
import Lottie from "lottie-react";
import question from '../assets/question.json'

const FAQ = () => {
    return (
        <section className="mt-4">
            <Lottie animationData={question} loop={true} className="h-80 mx-auto" />
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl text-center py-5">Blog Side Questions</h2>

		<div className="space-y-4">
			<details className="w-full border cursor-pointer rounded-lg shadow-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> what is usestate in react ?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.. </p>
			</details>
			<details className="w-full border rounded-lg cursor-pointer shadow-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">what is useeffect in react?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 "> What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed we'll refer to it as our “effect”, and call it later after performing the DOM update</p>
			</details>
			<details className="w-full border rounded-lg cursor-pointer shadow-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">what is useref in react?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes.. </p>
			</details>
			
		</div>
	</div>
</section>
    );
};

export default FAQ;