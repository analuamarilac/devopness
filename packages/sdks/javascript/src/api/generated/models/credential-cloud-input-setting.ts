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


import { CredentialCloudInputSettingValidation } from './credential-cloud-input-setting-validation';

/**
 * A input setting for credential cloud provider
 * @export
 * @interface CredentialCloudInputSetting
 */
export interface CredentialCloudInputSetting {
    /**
     * The name of the input setting
     * @type {string}
     * @memberof CredentialCloudInputSetting
     */
    name: string;
    /**
     * The human readable version of the input setting name
     * @type {string}
     * @memberof CredentialCloudInputSetting
     */
    name_human_readable: string;
    /**
     * 
     * @type {CredentialCloudInputSettingValidation}
     * @memberof CredentialCloudInputSetting
     */
    validation: CredentialCloudInputSettingValidation;
    /**
     * The default value of the input setting
     * @type {string}
     * @memberof CredentialCloudInputSetting
     */
    default_value: string | null;
    /**
     * Defines if the input setting data is a sensitive content
     * @type {boolean}
     * @memberof CredentialCloudInputSetting
     */
    sensitive: boolean;
}

