import { LeftOutlined } from "@ant-design/icons";
import { Button, ButtonProps, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {
	wIcon?: boolean;
	iconOnly?: boolean;
} & ButtonProps;

export const BackBtn = ({ wIcon, iconOnly, ...others }: Props) => {
	const navigate = useNavigate();

	return (
		<Tooltip title="Navigate to previous page">
			<Button
				icon={wIcon || iconOnly ? <LeftOutlined /> : null}
				onClick={() => navigate(-1)}
				{...others}
			>
				{!iconOnly && "Go back"}
			</Button>
		</Tooltip>
	);
};
