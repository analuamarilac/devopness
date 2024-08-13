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


import { CredentialCloudInputSetting } from './credential-cloud-input-setting';
import { CredentialCloudServiceType } from './credential-cloud-service-type';

/**
 * A credential cloud provider
 * @export
 * @interface CredentialCloudType
 */
export interface CredentialCloudType {
    /**
     * The code of the cloud provider
     * @type {string}
     * @memberof CredentialCloudType
     */
    code: string;
    /**
     * The name of the cloud provider
     * @type {string}
     * @memberof CredentialCloudType
     */
    name: string;
    /**
     * Text describing the cloud provider
     * @type {string}
     * @memberof CredentialCloudType
     */
    hint: string;
    /**
     * The type of the cloud provider
     * @type {string}
     * @memberof CredentialCloudType
     */
    type: string;
    /**
     * The human readable version of the cloud provider type
     * @type {string}
     * @memberof CredentialCloudType
     */
    type_human_readable: string;
    /**
     * The list of cloud services for credential cloud provider
     * @type {Array<CredentialCloudServiceType>}
     * @memberof CredentialCloudType
     */
    cloud_services: Array<CredentialCloudServiceType>;
    /**
     * The list of input settings for credential cloud provider
     * @type {Array<CredentialCloudInputSetting>}
     * @memberof CredentialCloudType
     */
    input_settings: Array<CredentialCloudInputSetting>;
}

