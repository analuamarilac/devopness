/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ApiError } from '../../generated/models';
import { Credential } from '../../generated/models';
import { CredentialEnvironmentCreate } from '../../generated/models';
import { CredentialRelation } from '../../generated/models';
import { CredentialSetting } from '../../generated/models';

/**
 * EnvironmentsCredentialsApiService - Auto-generated
 */
export class EnvironmentsCredentialsApiService extends ApiBaseService {
    /**
     * 
     * @summary Add a Credential to the given environment
     * @param {number} environmentId The ID of the environment.
     * @param {CredentialEnvironmentCreate} credentialEnvironmentCreate A JSON object containing the resource data
     */
    public async addEnvironmentCredential(environmentId: number, credentialEnvironmentCreate: CredentialEnvironmentCreate): Promise<ApiResponse<Credential>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'addEnvironmentCredential');
        }
        if (credentialEnvironmentCreate === null || credentialEnvironmentCreate === undefined) {
            throw new ArgumentNullException('credentialEnvironmentCreate', 'addEnvironmentCredential');
        }

        let queryString = '';

        const requestUrl = '/environments/{environment_id}/credentials' + (queryString? `?${queryString}` : '');

        const response = await this.post <Credential, CredentialEnvironmentCreate>(requestUrl.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))), credentialEnvironmentCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return provider settings
     * @param {number} environmentId The ID of the environment.
     * @param {string} providerCode The code of the provider.
     */
    public async getEnvironmentCredentialSettings(environmentId: number, providerCode: string): Promise<ApiResponse<CredentialSetting>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'getEnvironmentCredentialSettings');
        }
        if (providerCode === null || providerCode === undefined) {
            throw new ArgumentNullException('providerCode', 'getEnvironmentCredentialSettings');
        }

        let queryString = '';

        const requestUrl = '/environments/{environment_id}/credentials/{provider_code}/settings' + (queryString? `?${queryString}` : '');

        const response = await this.get <CredentialSetting>(requestUrl.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))).replace(`{${"provider_code"}}`, encodeURIComponent(String(providerCode))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all Credentials belonging to an environment
     * @param {number} environmentId The ID of the environment.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listEnvironmentCredentials(environmentId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<CredentialRelation>>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'listEnvironmentCredentials');
        }

        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/environments/{environment_id}/credentials' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<CredentialRelation>>(requestUrl.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))));
        return new ApiResponse(response);
    }
}
