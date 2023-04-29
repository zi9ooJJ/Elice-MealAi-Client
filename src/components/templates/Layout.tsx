import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TopButton from "../atoms/buttons/TopButton";
import Footer from "./Footer";
import Header from "./Header";

// styled
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Page = styled.div`
	margin: 90px auto 120px auto;
	flex: 1;
`;

// TODO : app.tsx, index.tsx 구조 확인 후 작업
const Layout = () => {
	return (
		<>
			<Header />
			<TopButton />
			<Wrapper>
				<Page>
					<Outlet />
				</Page>
				<Footer />
			</Wrapper>
		</>
	);
};

export default Layout;
