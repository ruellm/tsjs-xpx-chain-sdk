/**
<<<<<<< HEAD
 * Catapult REST Endpoints
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.16
=======
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.15
>>>>>>> jwt
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
<<<<<<< HEAD
=======
/// <reference types="node" />
import http = require('http');
>>>>>>> jwt
import { BlockInfoDTO } from '../model/blockInfoDTO';
import { MerkleProofInfoDTO } from '../model/merkleProofInfoDTO';
import { StatementsDTO } from '../model/statementsDTO';
import { TransactionInfoDTO } from '../model/transactionInfoDTO';
import { Authentication } from '../model/models';
export declare enum BlockRoutesApiApiKeys {
}
export declare class BlockRoutesApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
<<<<<<< HEAD
=======
    setHeaders(headers: {}): void;
>>>>>>> jwt
    setApiKey(key: BlockRoutesApiApiKeys, value: string): void;
    /**
     * Gets a block from the chain that has the given height.
     * @summary Get block information
     * @param height The height of the block.
     */
    getBlockByHeight(height: number, options?: {
        headers: {
            [name: string]: string;
        };
<<<<<<< HEAD
    }): Promise<BlockInfoDTO>;
=======
    }): Promise<{
        response: http.ClientResponse;
        body: BlockInfoDTO;
    }>;
>>>>>>> jwt
    /**
     * Returns the [receipts](https://nemtech.github.io/concepts/receipt.html) linked to a block.
     * @summary Get receipts from a block
     * @param height The height of the block.
     */
    getBlockReceipts(height: number, options?: {
        headers: {
            [name: string]: string;
        };
<<<<<<< HEAD
    }): Promise<StatementsDTO>;
=======
    }): Promise<{
        response: http.ClientResponse;
        body: StatementsDTO;
    }>;
>>>>>>> jwt
    /**
     * Returns an array of [transactions](https://nemtech.github.io/concepts/transaction.html) included in a block for a given block height.
     * @summary Get transactions from a block
     * @param height The height of the block.
     * @param pageSize The number of transactions to return for each request.
     * @param id The transaction id up to which transactions are returned.
     */
    getBlockTransactions(height: number, pageSize?: number, id?: string, options?: {
        headers: {
            [name: string]: string;
        };
<<<<<<< HEAD
    }): Promise<Array<TransactionInfoDTO>>;
=======
    }): Promise<{
        response: http.ClientResponse;
        body: Array<TransactionInfoDTO>;
    }>;
>>>>>>> jwt
    /**
     * Gets up to limit number of blocks after given block height.
     * @summary Get blocks information
     * @param height The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead.
     * @param limit The number of blocks to be returned.
     */
    getBlocksByHeightWithLimit(height: number, limit: 25 | 50 | 75 | 100, options?: {
        headers: {
            [name: string]: string;
        };
<<<<<<< HEAD
    }): Promise<Array<BlockInfoDTO>>;
=======
    }): Promise<{
        response: http.ClientResponse;
        body: Array<BlockInfoDTO>;
    }>;
>>>>>>> jwt
    /**
     * Returns the merkle path for a [receipt statement or resolution](https://nemtech.github.io/concepts/receipt.html) linked to a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the receipt was linked with the block.
     * @summary Get the merkle path for a given a receipt statement hash and block
     * @param height The height of the block.
     * @param hash The hash of the receipt statement or resolution.
     */
    getMerkleReceipts(height: number, hash: string, options?: {
        headers: {
            [name: string]: string;
        };
<<<<<<< HEAD
    }): Promise<MerkleProofInfoDTO>;
=======
    }): Promise<{
        response: http.ClientResponse;
        body: MerkleProofInfoDTO;
    }>;
>>>>>>> jwt
    /**
     * Returns the merkle path for a [transaction](https://nemtech.github.io/concepts/transaction.html) included in a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the transaction was included in the block.
     * @summary Get the merkle path for a given a transaction and block
     * @param height The height of the block.
     * @param hash The hash of the transaction.
     */
    getMerkleTransaction(height: number, hash: string, options?: {
        headers: {
            [name: string]: string;
        };
<<<<<<< HEAD
    }): Promise<MerkleProofInfoDTO>;
=======
    }): Promise<{
        response: http.ClientResponse;
        body: MerkleProofInfoDTO;
    }>;
>>>>>>> jwt
}
