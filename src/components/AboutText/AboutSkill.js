import * as React from 'react'

import Typography from '@mui/material/Typography';

import AboutContainer from '../../AboutContainer'

export default function AboutSkills() {
    return (
        <>
            <Typography variant='h6' component="div" gutterBottom sx={{
                width: 300,
                height: 200,
                color: 'white',
                marginLeft: 50,
                marginTop: 30,
                paddingTop: 10
            }}>
                <container>
                    <div className="aboutSkills">
                        <AboutContainer title="About Skills">
                            <div>
                                Technical Skills
                                <br />
                                <ul>
                                    <li>C#</li>
                                </ul>
                                <ul>
                                    <li>Python Django</li>
                                </ul>
                                <ul>
                                    <li>Node.Js</li>
                                </ul>
                                <ul></ul>
                                <ul>
                                    <li>React.Js</li>
                                </ul>
                                <ul>
                                    <li>SQL</li>
                                </ul>
                                <ul>
                                    <li>VBA</li>
                                </ul>
                                <ul>
                                    <li>Ms Applications</li>
                                </ul>
                            </div>
                        </AboutContainer>
                    </div>
                </container>
            </Typography>
        </>
    )
}