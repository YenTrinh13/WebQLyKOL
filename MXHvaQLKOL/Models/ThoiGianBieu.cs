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
    
    public partial class ThoiGianBieu
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ThoiGianBieu()
        {
            this.minitasks = new HashSet<minitask>();
        }
    
        public int id { get; set; }
        public string AccName { get; set; }
        public string TieuDePhu { get; set; }
        public string WorkName { get; set; }
        public string Ghichu { get; set; }
        public Nullable<System.DateTime> ThoiGian { get; set; }
        public Nullable<int> TrangThai { get; set; }
    
        public virtual AccKOL AccKOL { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<minitask> minitasks { get; set; }
    }
}
