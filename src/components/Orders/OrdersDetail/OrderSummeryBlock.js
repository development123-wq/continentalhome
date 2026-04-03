import React from 'react';
import DataTable from 'react-data-table-component';

function OrderSummeryBlock({ products }) {
    const columns = [
        {
            name: "PRODUCT NAME",
            selector: (row) => row.product_name,
            sortable: true,
            cell: row => (
                <div>
                    <h6 className="title">{row.product_name}</h6>
                    <span className="d-block fs-6 text-primary">{row.product_sku}</span>
                </div>
            ),
        },
        {
            name: "QUANTITY",
            selector: (row) => row.product_qty,
            sortable: true,
        },
        {
            name: "PRICE",
            selector: (row) => `$${row.product_unit_price.toFixed(2)}`,
            sortable: true
        },
        {
            name: "TOTAL",
            selector: (row) => `$${row.product_total_price.toFixed(2)}`,
            sortable: true
        }
    ];

    return (
        <div className="col-sm-12">
            <DataTable
                columns={columns}
                data={products}
                defaultSortField="product_name"
                pagination
                selectableRows={false}
                className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                highlightOnHover
            />
        </div>
    );
}

export default OrderSummeryBlock;
