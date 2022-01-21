import {Link } from "react-router-dom";

export default function Polygon() {
    return (

        <div class = "text-center bg-zinc-300 py-8 px-8 space-y-5">
            
            <h1 class = "text-5xl font-bold text-center">Polygon hotspot</h1>

            <div class = " py-10">
            
                <img class = " md:object-top object-center " src="https://az705044.vo.msecnd.net/20210608/bitcoin-chart.png"></img>
    
           </div >

            <div class = "text-center bg-zinc-200 max-w-sm mx-auto py-10 space-y-5 rounded-xl shadow-lg items-center">

                <h3>Live chat</h3>

                <div class = "bg-zinc-100 rounded-xl shadow-lg items-center">
                    <label>Teacher: </label>
                    <label>I want to teach yo all i know about Polygon Coin!!</label>
                </div>
                <div class = "bg-zinc-100 rounded-xl shadow-lg items-center">
                    <label>Student: </label>
                    <label>And i want to learn!!</label>
                </div>
                <div class = "bg-zinc-100 rounded-xl shadow-lg items-center">
                    <label>Teacher: </label>
                    <label>First of all, how much money do you have to invest?</label>
                </div>
                <div class = "bg-zinc-100 rounded-xl shadow-lg items-center"> 
                    <label>Student: </label>
                    <label>Don't worry about money</label>
                </div>
                <div class = "bg-zinc-100 rounded-xl shadow-lg items-center">
                    <label>Teacher: </label>
                    <label>Ok, then let's start</label>
                </div>
                <div class = "space-x-6">
                    <input 
                    type="text"/>
                    <button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
            </div>
        </div>
    );
}