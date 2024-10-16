import type { SVGProps } from "react";
export function SvgRightFill({
	height = 24,
	width = 24,
	fill = "currentColor",
	...props
}: SVGProps<SVGSVGElement>): React.ReactElement {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={height}
			height={width}
			fill={fill}
			{...props}
		>
			<g fill="none" fillRule="evenodd">
				<path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
				<path
					fill={fill}
					d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12 8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"
				/>
			</g>
		</svg>
	);
}
