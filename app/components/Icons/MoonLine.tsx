import type { SVGProps } from "react";
export function SvgMoonLine({
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
				<path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
				<path
					fill="#09244BFF"
					d="M13.574 3.137a1.01 1.01 0 0 0-1.097 1.409 6 6 0 0 1-7.931 7.931 1.01 1.01 0 0 0-1.409 1.097A9 9 0 0 0 21 12c0-4.434-3.206-8.118-7.426-8.863m1.307 2.481A7.002 7.002 0 0 1 12 19a7 7 0 0 1-6.382-4.12 8 8 0 0 0 9.263-9.263Z"
				/>
			</g>
		</svg>
	);
}
