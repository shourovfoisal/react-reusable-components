import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
}

export const Button = ({
	children,
	className,
	disabled = false,
	...props
}: Props): JSX.Element => {
	return (
		<button
			disabled={disabled}
			className={"text-4xl" + " " + className}
			{...props}
		>
			{children}
		</button>
	);
};
