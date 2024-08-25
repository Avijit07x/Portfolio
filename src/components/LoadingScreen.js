import { SyncLoader } from "react-spinners";

const LoadingScreen = () => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-white text-white">
			<div className="animate-pulse text-4xl font-bold">
				<SyncLoader
					size={8}
					color="#ef4e19"
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</div>
		</div>
	);
};

export default LoadingScreen;
