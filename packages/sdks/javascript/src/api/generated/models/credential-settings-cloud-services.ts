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


import { CloudProviderServiceRegion } from './cloud-provider-service-region';
import { CloudProviderServiceResourceType } from './cloud-provider-service-resource-type';

/**
 * 
 * @export
 * @interface CredentialSettingsCloudServices
 */
export interface CredentialSettingsCloudServices {
    /**
     * 
     * @type {Array<CloudProviderServiceRegion>}
     * @memberof CredentialSettingsCloudServices
     */
    regions: Array<CloudProviderServiceRegion>;
    /**
     * 
     * @type {Array<CloudProviderServiceResourceType>}
     * @memberof CredentialSettingsCloudServices
     */
    resource_types: Array<CloudProviderServiceResourceType>;
}

