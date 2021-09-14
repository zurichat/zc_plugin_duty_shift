using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace App
{
    public class DeleteModel
    {
        [Required]
        public string plugin_id { get; set; }

        [Required]
        public string organization_id { get; set; }

        [Required]
        public string collection_name { get; set; }

        [Required]
        public bool bulk_delete { get; set; }

        public string object_id { get; set; }

        public Dictionary<string, string> filter { get; set; } = new Dictionary<string, string>();
    }
}