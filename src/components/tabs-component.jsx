import React, { useEffect, useState } from 'react';
import './tabs-component.css';
import { bigGroupAirports, getAllAirports, getAllPresidents, getAllTouristicAttractions, getPoliticalPartyStats, groupAirportsByCityAndDepartment, groupAttractionsByCityAndDepartment } from '../services/service';
import PresidentList from './president-list';
import AirportList from './airport-list';
import TouristicList from './touristic-list';
import PartysList from './partys-list';
import AttractionsGroup from './attractions-group';
import AirportGroup from './airport-group';
import BigGroupAirports from './bit-group-airports';

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [presidents, setPresidents] = useState([]);
    const [responseTimePresidents, setResponseTimePresidents] = useState(0);
    const [airports, setAirports] = useState([]);
    const [responseTimeAirports, setResponseTimeAirports] = useState(0);
    const [touristicAttractions, setTouristicAttractions] = useState([]);
    const [responseTimeTouristicAttractions, setResponseTimeTouristicAttractions] = useState(0);
    const [partyStats, setPartyStats] = useState([]);
    const [attractionsGroup, setAttractionsGroup] = useState([]);
    const [airportsGroup, setAirportsGroup] = useState([]);
    const [airportsBigGroup, setAirportsBigGroup] = useState([]);


    useEffect(() => {
        getAllPresidents()
            .then(result => {
                setPresidents(result.data);
                setResponseTimePresidents(result.responseTime);
            })
            .catch(error => console.error('Error al obtener la lista de presidentes:', error));
    }, []);

    useEffect(() => {
        getAllAirports()
            .then(result => {
                setAirports(result.data);
                setResponseTimeAirports(result.responseTime);
            })
            .catch(error => console.error('Error al obtener la lista de aeropuertos:', error));
    }, []);

    useEffect(() => {
        getAllTouristicAttractions()
            .then(result => {
                setTouristicAttractions(result.data);
                setResponseTimeTouristicAttractions(result.responseTime);
            })
            .catch(error => console.error('Error al obtener la lista de atracciones turísticas:', error));
    }, []);

    useEffect(() => {
        getPoliticalPartyStats()
          .then(stats => setPartyStats(stats))
          .catch(error => console.error('Error al obtener estadísticas:', error));
      }, []);

    useEffect(() => {
        groupAttractionsByCityAndDepartment()
            .then(result => setAttractionsGroup(result))
            .catch(error => console.error('Error al obtener la lista de atracciones turísticas:', error));
    }, []);

    useEffect(() => {
        groupAirportsByCityAndDepartment()
            .then(result => setAirportsGroup(result))
            .catch(error => console.error('Error al obtener la lista de aeropuertos:', error));
    }, []);

    useEffect(() => {
        bigGroupAirports()
            .then(result => setAirportsBigGroup(result))
            .catch(error => console.error('Error al obtener la lista de aeropuertos:', error));
    }, []);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="container">
            <div className="tab_box">
                <div 
                    className={`tab_btn ${activeTab === 0 ? 'active' : ''}`}
                    onClick={() => handleTabClick(0)}
                >
                    Tab 1
                </div>
                <div 
                    className={`tab_btn ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => handleTabClick(1)}
                >
                    Tab 2
                </div>
                <div 
                    className={`tab_btn ${activeTab === 2 ? 'active' : ''}`}
                    onClick={() => handleTabClick(2)}
                >
                    Tab 3
                </div>
            </div>

            <div className="content_box">
                <div className={`content ${activeTab === 0 ? 'active' : ''}`}>
                    <h2>Presidentes</h2>
                    <PresidentList presidents={presidents} responseTime={responseTimePresidents} />
                    <hr/>
                    <h2>Procesamiento</h2>
                    <PartysList partys={partyStats}/>

                </div>

                <div className={`content ${activeTab === 1 ? 'active' : ''}`}>
                    <h2>Aeropuertos</h2>
                    <AirportList airports={airports} responseTime={responseTimeAirports} />
                    <hr/>
                    <h2>Procesamiento</h2>
                    <AirportGroup airports={airportsGroup}/>
                    <hr/>
                    <BigGroupAirports airports={airportsBigGroup}/>
                </div>

                <div className={`content ${activeTab === 2 ? 'active' : ''}`}>
                    <h2>Atracciones Turisticas</h2>
                    <TouristicList touristics={touristicAttractions} responseTime={responseTimeTouristicAttractions} />
                    <hr/>
                    <h2>Procesamiento</h2>
                    <AttractionsGroup groupedAttractions={attractionsGroup} />
                </div>
            </div>
        </div>
    );
}

export default TabsComponent;
