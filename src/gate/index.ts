import {VendorsApiResults} from '../types/vendorsApiResults';
import client from './config';
import {APIURLS} from '../utils/constants/apiUrl';

export const fetchVendorsList = async (page: number, pageSize: number = 10) =>
  await (
    await client.get<VendorsApiResults>(
      `${APIURLS.VENDOR_LIST_URL}?page=${page}&page_size=${pageSize}&lat=35.754&long=51.328`,
    )
  ).data;
