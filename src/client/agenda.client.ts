import { Agenda } from "@/model/agenda.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import axios, { AxiosInstance } from "axios";

/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 14/06/2022
 * @version 1.0.0
 */
export class AgendaClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/agendas',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Agenda> {
        try {
            return (await this.axiosClient.get<Agenda>(`/${id}`)).data
        } catch (error) {
            return Promise.reject(error.response)
        }
    }

  public async findByFiltrosPaginado(pageRequest : PageRequest):
    Promise<PageResponse<Agenda>> {
	try {
	    let requestPath = ''

	    requestPath += `?page=${pageRequest.currentPage}`
	    requestPath += `&size=${pageRequest.pageSize}`
	    requestPath += `&sort=${pageRequest.sortField === undefined
		    ? '' : pageRequest.sortField},${pageRequest.direction}`

	    return (await this.axiosClient.get<PageResponse<Agenda>>(requestPath,
		{
			params: { filtros: pageRequest.filter }
		}
	    )).data
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }

    public async cadastrar(agenda: Agenda): Promise<void> {
	try {
	    return (await this.axiosClient.post('/', agenda))
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }

    public async editar(agenda: Agenda): Promise<void> {
	try {
	    return (await this.axiosClient.put(`/${agenda.id}`, agenda)).data
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }

    public async desativar(agenda: Agenda): Promise<void> {
	try {
	    return (await this.axiosClient.put(`/desativar/${agenda.id}`, agenda)).data
	} catch (error) {
	    return Promise.reject(error.response)
	}
    }
}
