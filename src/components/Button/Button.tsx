import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
}

const BaseButton = ({
	children,
	className,
	onClick,
	disabled = false,
	...props
}: Props): JSX.Element => {
	return (
		<button
			className={"text-4xl" + " " + className}
			onClick={onClick}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};

export const Button = BaseButton;
