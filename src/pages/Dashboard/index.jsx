import React, {useState, useEffect} from 'react';
import { Pagination, Input, Space } from 'antd';
import { Typography } from 'antd';

import { getAllCharacter, getCharacterByName } from '../../services/character';
import CardCharacter from '../../components/CardCharacter';

import './styles.css';

const { Title } = Typography;


const Dashboard = () => {

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    const getAllCharacters = async () => {
        const response = await getAllCharacter(page);
        setCharacters(response.results);
        setInfo(response.info)
        setLoading(false);
    }

    const getCharactersByName = async () => {
        const response = await getCharacterByName(search, page);
        setCharacters(response.results);
        setInfo(response.info)
    }


    useEffect(() => {
        if(search === ''){
            getAllCharacters();
        }else{
        getCharactersByName();
        }

    }, [page, search]);


    return loading === false ? (
        <div className="dashboard">

        <Space direction="vertical" >
            <Title>
                Pesquisar
            </Title>
            <Input 
            placeholder="Insira o nome do personagem" 
            onChange={e => setSearch(e.target.value)} 
            style={{ width: 400 }} />
        </Space>

            <div className="card" >
               {characters.map(character => (
                   <CardCharacter key={character.id} image={character.image} nome={character.name} status={character.status}/>
                ))}
            </div>
            <div className="pagination">
                <Pagination 
                    defaultCurrent={1} 
                    total={info.count} 
                    pageSize={20}
                    onChange={(currentPage) => {
                        setPage(currentPage);
                    }}
                    />
            </div>
        </div>
    ) :
    (
        <div className="loading">
            <h1>Loading...</h1>
        </div>
    )
}

export default Dashboard;