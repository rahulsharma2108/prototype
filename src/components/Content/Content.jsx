import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../../AppContext';
import { API_HOST, DEFAULT_CAMPAIGN, SERVER_HOST } from '../../common/utils';
import './content.scss'
import { ContentDetails } from './ContentDetails/ContentDetails';
import { Loader } from '../Loader/Loader';

export const Content = () => {
    const { selectedContentId } = useContext(AppContext);
    const [showLoader, setShowLoader] = useState(true)
    const [contentDetails, setContentDetails] = useState([])

    const submitQuestion = (e) => {
        e.preventDefault()
       
        const question = e.target.question.value
        e.target.question.value = ''
        let url = `v1/campaigns/conversations/${DEFAULT_CAMPAIGN}/${selectedContentId}/${encodeURIComponent(question)}`
        axios.get(`${SERVER_HOST}${url}`).then((data) => {
            setContentDetails([...contentDetails, data.data]);
            setShowLoader(false)
        })
    }

    useEffect(() => {
        if (selectedContentId) {
            let url = `/${DEFAULT_CAMPAIGN}/narratives/${selectedContentId}`

            axios.get(`${API_HOST}${url}`).then((data) => {
                setContentDetails([...contentDetails, data.data]);
                setShowLoader(false)
            })
        }
    }, [selectedContentId])

    return <div className='content'>
        <div className='response'>
            {contentDetails?.length > 0 && <ContentDetails contentDetails={contentDetails} />}
            {/* {showLoader && <Loader/>}  */}
        </div>
        <form onSubmit={submitQuestion}>
            <input className="input-element" name='question' type="text" placeholder='Ask me anything about this' />
        </form>
    </div>
}