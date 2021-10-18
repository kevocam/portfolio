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
                    Mis labores consistían en dar mantenimiento al Front end de una empresa financiera, estaba a mi cargo el desarrollo de los requerimientos y mantenimiento de appcaciones propias.
                    <br />
                    <div>
                        <p>
                            - Coordiné con el equipo de marketing y diseño para los aspectos visuales, como también con el equipo encargado del Backend para los servicios requeridos .
                        </p>
                        <p>
                            - Desarrollo de SPA utipzando JavaScript, framework VueJS.                        

                        </p>
                    </div>
                    
                        <p >                        
                            Coordiné con el equipo de marketing y diseño para los aspectos visuales, como también con el equipo encargado del Backend para los servicios requeridos .
                        </p>
                        <p>
                        </p>    
                        <p>
                            Mantenimiento de landing pages appcations hechas con VueJs.
                        </p>
                        <p>
                            Consumo de Rest Api.
                        </p>
                        <p>
                            GitLab para la gestión del proyecto.
                        </p>
                    
                </TabPane>
                <TabPane tab="Dau Holding" key="2">                    
                    Junto con el equipo de diseño desarrollamos una plataforma para congresos de la institución, con los siguientes detalles:
                                            <p>                            
                            Un chat para guiar a los asistentes.
                        </p>
                        <p>
                            Stands personapzados de los sponsors
                        </p>
                        <p>Auditorios para las conferencias.</p>
                        <p>Laravel para el backend</p>
                        <p>pvewire para el fontend</p>

                    
                </TabPane>
                <TabPane tab="WapkyTI" key="3">
                Fui Co-Founder de Wapky TI, me encargaba del desarrollo del frontend y además del backend. Creando presencia digital para diversas empresas púbpcas y privadas.
                </TabPane>
                </Tabs>
        </div>
    )
}

export default Experience
 
