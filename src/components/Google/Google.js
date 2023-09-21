import React, {  useCallback, useEffect } from 'react';
import TokenService from '../../services/TokenService';
import { serverRequest } from '../../services/request';

const Google = () => {
    const urlParams = new URLSearchParams(window.location.search);
    /* you have to copy paste this code to component which you have given in redirect url */
    const access_token = urlParams.get('access_token');
    const refresh_token = urlParams.get('refresh_token');

    useEffect(() => {
        if (access_token && refresh_token) {
            TokenService.setUser({'access' : access_token, 'refresh' : refresh_token});
        }
    },[access_token, refresh_token])

    /*copy paste till here */
    
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            const response = await serverRequest('GET', '/api/google-login/');
            console.log(response)
            window.location.href = response.data.auth_url;
        } catch (error) {
            console.log(error);
        }
    }, []);

  return (
    <div>
        <button onClick={handleSubmit} type="submit">Google</button>
    </div>
  );
};

export default Google;