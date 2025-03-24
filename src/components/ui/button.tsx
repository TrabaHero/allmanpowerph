import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

export function Button({ className = '', text = '',onClick = () => {}, ...props }: {
	className?: string,
	text?: string,
	onClick?: MouseEventHandler
}) {

	// Base class of button
	// The only reason we factor sht out
	const baseClass = 'px-8 py-3 rounded-md hover:brightness-125 transition-all shadow-lg w-full'

	return (
		<button 
			className={ cn(baseClass, className) } 
			onClick={ onClick }
			{ ...props }
		>
			{ text }
		</button>)
}