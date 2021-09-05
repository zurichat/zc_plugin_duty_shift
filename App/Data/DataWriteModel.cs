using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace App
{
    public class DataWriteModel<TPayload>
    {
        [Required]
        public string plugin_id { get; set; }

        [Required]
        public string organization_id { get; set; }

        [Required]
        public string collection_name { get; set; }

        [Required]
        public bool bulk_write { get; set; }

        public string object_id { get; set; }

        public string filter { get; set; } //Data type for filter is yet to be determined. Ask Zc_Core team

        [Required]
        public TPayload payload { get; set; }
    }
}