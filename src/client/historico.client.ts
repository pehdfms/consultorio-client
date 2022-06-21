import { Historico } from "@/model/historico.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import axios, { AxiosInstance } from "axios";

/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 14/06/2022
 * @version 1.0.0
 */
export class HistoricoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/historicos',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Historico> {
        try {
            return (await this.axiosClient.get<Historico>(`/${id}`)).data
        } catch (error) {
            return Promise.reject(error.response)
        }
    }

  public async findByFiltrosPaginado(pageRequest : PageRequest):
    Promise<PageResponse<Historico>> {
	try {
	    let requestPath = ''

	    requestPath += `?page=${pageRequest.currentPage}`
	    requestPath += `&size=${pageRequest.pageSize}`
	    requestPath += `&sort=${pageRequest.sortField === undefined
		    ? '' : pageRequest.sortField},${pageRequest.direction}`

	    return (await this.axiosClient.get<PageResponse<Historico>>(requestPath,
		{
			params: { filtros: pageRequest.filter }
		}
	    )).data
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }

    public async cadastrar(historico: Historico): Promise<void> {
	try {
	    return (await this.axiosClient.post('/', historico))
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }

    public async editar(historico: Historico): Promise<void> {
	try {
	    return (await this.axiosClient.put(`/${historico.id}`, historico)).data
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }

    public async desativar(historico: Historico): Promise<void> {
	try {
	    return (await this.axiosClient.put(`/desativar/${historico.id}`, historico)).data
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }
}
