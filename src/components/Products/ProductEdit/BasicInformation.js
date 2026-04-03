import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function BasicInformation() {
    return (
        <>
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Basic information</h6>
            </div>
            <div className="card-body">
                <form>
                    <div className="row g-3 align-items-center">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control"  placeholder="Product Name"  onChange={() => { }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Page Title</label>
                            <input type="text" className="form-control"  placeholder="Title"  onChange={() => { }} />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Product Slug</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text">https://demo.com</span>
                                <input type="text" className="form-control"  placeholder="ex. /product" onChange={() => { }} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Product Description</label>
                            <textarea
                name="description"
                className="form-control"
                placeholder="ex. Lorem Ipsum has been the industry's standard......"
                style={{ width: '100%' }}
              ></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default BasicInformation