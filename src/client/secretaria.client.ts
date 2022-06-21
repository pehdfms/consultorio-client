import { Secretaria } from "@/model/secretaria.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import axios, { AxiosInstance } from "axios";

/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 14/06/2022
 * @version 1.0.0
 */
export class SecretariaClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/secretarias',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Secretaria> {
        try {
            return (await this.axiosClient.get<Secretaria>(`/${id}`)).data
        } catch (error) {
            return Promise.reject(error.response)
        }
    }

  public async findByFiltrosPaginado(pageRequest : PageRequest):
    Promise<PageResponse<Secretaria>> {
	try {
	    let requestPath = ''

	    requestPath += `?page=${pageRequest.currentPage}`
	    requestPath += `&size=${pageRequest.pageSize}`
	    requestPath += `&sort=${pageRequest.sortField === undefined
		    ? '' : pageRequest.sortField},${pageRequest.direction}`

	    return (await this.axiosClient.get<PageResponse<Secretaria>>(requestPath,
		{
			params: { filtros: pageRequest.filter }
		}
	    )).data
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }

    public async cadastrar(secretaria: Secretaria): Promise<void> {
	try {
	    return (await this.axiosClient.post('/', secretaria))
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }

    public async editar(secretaria: Secretaria): Promise<void> {
	try {
	    return (await this.axiosClient.put(`/${secretaria.id}`, secretaria)).data
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }

    public async desativar(secretaria: Secretaria): Promise<void> {
	try {
	    return (await this.axiosClient.put(`/desativar/${secretaria.id}`, secretaria)).data
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }
}
