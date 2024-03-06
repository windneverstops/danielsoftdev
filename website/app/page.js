"use client";
import Icon from "./component/Icon"
import { useState, useRef } from "react";
import {Roboto} from '@next/font/google';



export default function Home() {
	const [nameClickedCSS,setNameClicked] = useState("");
	const leftName = useRef(null);
	const rightName = useRef(null);
	const partTheSeas = () =>{
		// OASIS OF COLOURS
		
		
		
	}
	return (
		<>
	
		<main> 
			<header>
				<button className="absolute left-4">
				<Icon>
				
				</Icon>
				</button>
				
			</header>
			
			<div className="flex justify-center items-center h-screen">
				<div className="flex flex-col text-center flex-wrap ">
				<button onClick={partTheSeas} className="group flex flex-row flex-wrap text-7xl p-2 font-black hover:tracking-widest hover:ease-in-out duration-300">
					<div  >
						DANIEL
					
						HONG
					</div>
					
				</button>
				<hr className="p-2"></hr>
				<div className="text-sm md:text-base">
					Software Engineering student at Monash University
				</div>
				</div>
				
			</div>
			<div className="bg-white h-screen">
				test
			</div>
		</main>
	
		
		</>
		
	)
}
