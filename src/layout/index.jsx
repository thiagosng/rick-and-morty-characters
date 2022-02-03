import { Layout, Typography } from 'antd';
import { Outlet } from 'react-router-dom';
import './styles.css';
import Background from '../assets/rick-and-morty.jpg';

const { Header, Content } = Layout;
const { Title } = Typography;

const LayoutPage = () => {


    return (
        <Layout className="layout">
            <Header style={{ backgroundImage: 'linear-gradient(45deg, #800303, #120216)'}}>
            <div className="logo" />
            <Title 
                style={{ 
                    color: '#fff', 
                    textAlign: 'center', 
                    paddingTop: '10px'
                }}>
                Rick and Morty Characters
            </Title>
            </Header>
        <Content 
            style={{   
                padding: '50px 50px',
                backgroundImage: `url(${Background})`,
                height: '100vh' 
            }}>
            <div className="site-layout-content">
                <Outlet />
            </div>
        </Content>
    </Layout>
    )
}

export default LayoutPage;