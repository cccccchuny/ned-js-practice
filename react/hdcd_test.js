var json_object = {
    "project_name": "juhub2",
    "project_id": "4",
    "batch_name": "1-14",
    "batch_stage": "Test",
    "batch_job_seq": 1,
    "batch_job_id": "99-e6cddc93-de9f-405f-8bfd-f10966e3795d",
    "batch_job_name": "1-14-test",
    "history_id": "99-e6cddc93-de9f-405f-8bfd-f10966e3195e",
    "history_start_dt": "2022-01-15T05:55:35Z",
    "history_end_dt": "2022-01-15T05:55:36Z",
    "history_duration": null,
    "history_status": "Succ",
    "base_ym": "202201",
    "metrics_info_id": "99-e6cddc93-de9f-405f-8bfd-f10966e3795f",
    //var data = '{"name": "식빵", "family": "웰시코기", "age": 1, "weight": 2.14}';  json 형식의 문자열
    // 'value': {'create_mode': None}}, {'name': 'POLY_TAGS', 'value': {'poly_tags': None}}, {'name': 'CATEGORY_NAME', 'value': {'category_name': None}}], 'volumeMounts': [{'name': 'file-queue', 'mountPath': {'file_queue': None}}, {'name': 'dataset-storage', 'mountPath': '/datasets', 'subPath': 'datasets'}, {'name': 'dataset-storage', 'mountPath': '/artifacts', 'subPath': 'artifacts'}, {'name': 'notebook-storage', 'mountPath': '/notebooks'}, {'name': 'artifacts-context', 'mountPath': '/plx-context/artifacts'}, {'name': 'time', 'mountPath': '/etc/localtime:ro'}]}
    "metrics_value": {"data": {"name":"123"}}



    // {
    //     "grouped": [
    //         ["A11", {
    //             "count": 274,
    //             "std": 11.639574186809975,
    //             "min": 6,
    //             "max": 60,
    //             "sum": 5847,
    //             "var": 135.47968725025308,
    //             "mean": 21.33941605839416
    //         }],
    //         ["A12", {
    //             "count": 269,
    //             "std": 13.660311487983327,
    //             "min": 6,
    //             "max": 72,
    //             "sum": 6101,
    //             "var": 186.60410994872925,
    //             "mean": 22.680297397769515
    //         }],
    //         ["A13", {
    //             "count": 63,
    //             "std": 9.445178042737327,
    //             "min": 4,
    //             "max": 42,
    //             "sum": 1093,
    //             "var": 89.21138825900732,
    //             "mean": 17.349206349206348
    //         }],
    //         ["A14", {
    //             "count": 394,
    //             "std": 11.296553724620402,
    //             "min": 4,
    //             "max": 60,
    //             "sum": 7862,
    //             "var": 127.61212605323507,
    //             "mean": 19.95431472081219
    //         }]
    //     ],
    //     "omitted": 0
    // }
    ,
    "metrics_chart_value": "0.0012",
    "metrics_creator": "gudcns93",
    "metrics_created_dt": "2022-01-14T05:32:39Z",
    "metrics_info_name": "ned",
    "metrics_info_description": "test",
    "metrics_info_remarks": "test",
    "metrics_info_chart_type": "bar",
    "metrics_info_chart_labels": "label-test"
};




// console.log(json_object);

value_txt=json_object["metrics_value"]
json_parsing=value_txt ? JSON.parse(value_txt) : {};

metrics_value_data=json_parsing["data"];

col=json_parsing.data.name
console.log(col);




// 현재 JSON.parse(metrics_value_txt) 한번 돌렸을때 