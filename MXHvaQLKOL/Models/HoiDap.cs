//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MXHvaQLKOL.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class HoiDap
    {
        public int Ma { get; set; }
        public string Gmail { get; set; }
        public string NoiDung { get; set; }
        public Nullable<int> TrangThai { get; set; }
        public string IdGiaiQuyet { get; set; }
    
        public virtual AccAdmin AccAdmin { get; set; }
    }
}
