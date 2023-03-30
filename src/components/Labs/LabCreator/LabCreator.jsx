import React from "react";
import { Link } from "react-router-dom";
import './LabCreator.css'

export class LabCreator extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            types: [
                'docker'
            ],
            selectedType: 'docker',
            templates: {
                docker: [
                    'web-services',
                    'routing'
                ]
            }
        }
    }

    submit = (e) => 
    {
        e.preventDefault();
    }

    render()
    {
        return(
            <div>
                <h1>Create lab</h1>
                <div><Link to='../' className='a-link'>&lt;&lt;&lt; Back to Labs</Link></div>
                <hr/>
                <div className='form-container'>
                    <form className='lab-creation-form' onSubmit={(e) => {this.submit(e)}}>
                        <h2>Lab parameters</h2>
                        <div className='lab-creation-form-elem'>
                            <div className='form-value'>
                                <label htmlFor='name'>Name: </label>
                                <br/>
                                <input className='text-input' type='text' id='name' pattern='[A-Za-z0-9_]+' name='name'
                                title='Name can consist only of letters, numbers, and floor signs.' required/>
                            </div>
                            <div className='form-value'>
                                <label htmlFor='type'>Type: </label>
                                <br/>
                                <select className='text-input' id='type' name='type'>
                                    {this.state.types.map((v,i) => {
                                        return <option key={i} value={v} onClick={() => {this.setState({selectedType:v})}}>{v}</option>
                                    })}
                                </select>
                            </div>
                            <div className='form-value'>
                                <label htmlFor='machine_count'>Machine count: </label>
                                <br/>
                                <input className='text-input' type='text' pattern='\d{1,2}' id='machine-count' name='machine_count'
                                title='Machine count must be a number from 1 to 99.' required/>
                            </div>
                            <div className='form-value'>
                                <label htmlFor='type'>Template: </label>
                                <br/>
                                <select className='text-input' id='template' name='template'>
                                    {this.state.templates[this.state.selectedType]?.map((v,i) => {
                                        return <option key={i} value={v}>{v}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        {this.state.selectedType === 'docker' &&
                        <div>
                            <h2>Docker properties</h2>
                            <div className='lab-creation-form-elem'>
                                <div className='form-value'>
                                    <label htmlFor='name'>Port prefix: </label>
                                    <br/>
                                    <input className='text-input' type='text' pattern='[1-5]{1}' id='port-prefix' name='port-prefix'
                                    title='Port prefix must be a digit from 1 to 5.' required/>
                                </div>
                            </div>
                        </div>
                        }
                        <div className='lab-submit-container'>
                            <input type='submit' className='submit-input' value='Create'/>
                            <input type='reset' className='submit-input' value='Reset'/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}