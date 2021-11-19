import React from 'react'
import './style.scss'
import { Tabs, Radio, Space } from 'antd';
import {Context} from '../../context'


function Experience() {
    const { TabPane } = Tabs;
    const theme = React.useContext(Context);    
    let colorText = theme.theme ? "#b1bfc9": "#697477";
    
    return (
        <div className="experience">
        
        <Tabs size="large" className="tabs" style={{ color:colorText,fontSize:"1.6rem"
            }} tabPosition="left">
                <TabPane tab="ID4 @IoT" key="1">                    
                    Apoyé al equipo de desarrolladores del rubro financiero a dar mantenimiento y desarrollar nuevos proyectos que ayduen a mejorar la comunicación con su cartera de clientes.
                    <br />
                    <br />
                    <div>
                        <p>
                            - Mejoré el performance de los aplicativos en un 25% aplicando buenas prácticas de código y migrando los recursos a Firebase.
                        </p>
                        <p>
                            - Colaboré con el equipo de marketing mejorando en un 40% la data del detalli de visitas en la web, personalizando el script de google analitycs.
                        </p>
                    </div>
                    
                        <p>                        
                            - Reducí el tiempo de creación de nuevos productos en un 30%, desarrollando templates, y componentes reusables.
                        </p>                        
                    
                </TabPane>
                <TabPane tab="Dau Holding" key="2">                    
                        Junto al equipo de diseño desarrollamos una plataforma para desarollar el 
                        "II Congreso Internacional de Logoterapia Lima Perú - 2021". Contamos con más de 50 expositores, 
                        más de 300 alumnos, 3 salas habilitadas para 3 dias de evento. 
                        <br />
                        <br />
                        <p>                            
                            - Implementé un chat en tiempo real para la comunicación entre lo asistentes.
                        </p>
                        <p>
                            - Mejoré la gestion de los participantes en un 80% al crear un dashboar para creación, gestión y administracion de los participantes.
                        </p>
                        

                    
                </TabPane>
                <TabPane tab="WalikyTI" key="3">
                        Mejoramos la presencia digital de empresas públicas y privadas brindando apoyo en desarrollo de software, posicionamiento web, infraestructura Cluod.
                        <br />
                        <br />
                        <p>                            
                            - Incrementamos la comunicación entre el equipo y su público expecífico.
                        </p>
                        <p>
                            - Integramos una plataforma educativa usada por más de 50 estudiantes diariamente.
                        </p>
                        <p>
                            - Desarrollé un generador de mapas a partir de su longitud y latitud, mejorando en un 100% la ubicación, usando API rest de Google Maps.
                        </p>
                </TabPane>
                </Tabs>
        </div>
    )
}

export default Experience
 
